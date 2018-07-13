import { Injectable, ChangeDetectorRef, Inject } from '@angular/core';
import { TranslateService } from "ng2-translate"
import { ParseService } from '../';
import { NewsModel } from "~/shared"
import * as app from "tns-core-modules/application";
import * as utils from "~/utils"
@Injectable()
export class NewsListService {
    public parseService: ParseService;
    public translateService: TranslateService;
    constructor(
        @Inject(ParseService) parseService: ParseService,
        @Inject(TranslateService) translateService: TranslateService,
    ) {
        this.parseService = parseService;
        this.translateService = translateService;
    }

    getListNews(params: {
        limit: number,
        page: number
    }) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.parseService.cloud("getNewsList", params)
                .then(function (result) {
                    var arrNews: Array<NewsModel> = [];
                    if (result && result.code == 200) {
                        if (result.data) {
                            for (var i = 0; i < result.data.length; i++) {
                                arrNews.push(new NewsModel(result.data[i]));
                            }
                            resolve(arrNews);
                        }
                    }
                    else {
                        utils.showToast((self.translateService.get("NEWS_LIST_SERVICE.ERROR_MESSAGE.GET_LIST_FAIL") as any).value);
                        reject(result);
                    }
                })
                .catch(function (error) {
                    if (error) {
                        if (error.code == -1) {
                            if (error.message && typeof error.message === 'string') {
                                utils.showToast(error.message);
                            }
                        }
                        else if (error.code == 400) {
                            if (error.message && typeof error.message === 'string') {
                                utils.showToast((self.translateService.get("NEWS_LIST_SERVICE.ERROR_MESSAGE.GET_LIST_FAIL") as any).value);
                            }
                        }
                        else {
                            utils.showToast((self.translateService.get("NEWS_LIST_SERVICE.ERROR_MESSAGE.GET_LIST_FAIL") as any).value);
                        }
                    }
                    else {
                        utils.showToast((self.translateService.get("NEWS_LIST_SERVICE.ERROR_MESSAGE.GET_LIST_FAIL") as any).value);
                    }
                    reject(error);
                })
        })
    }
}