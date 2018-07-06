import { config } from '~/config';
import { checkInternetConnection, showToast } from "~/utils";
import { Injectable, Inject } from '@angular/core';
import * as app from "application";
var Parse = require("~/libs/parse.min.js");
var ParseQuery: any;
var ParseLiveQueryClient: any;
var FindCallback: any;
var SubscriptionHandling: any;
var localStorage = require("nativescript-localstorage");
@Injectable()
export class ParseService {

    private liveQueryEvent: any = {};

    public init() {
        Parse.initialize(config.server.SERVER_APP_ID);
        Parse.serverURL = localStorage.getItem('parseServerUrl') || config.server.SERVER_URL;
    }

    public configServerUrl(serverAddress: string) {
        if (serverAddress) {
            Parse.serverURL = config.server.SERVER_URL;
            localStorage.setItem('parseServerUrl', config.server.SERVER_URL);
            showToast(Parse.serverURL);
        }
    }

    public query(className: string, where: any) {
        if (!className || className == '') return false;
        var query = new Parse.Query(className);
        if (where)
            query = where(query);
        return query.find();
    }

    public newQuery(classObj: string) {
        var query = new Parse.Query(classObj);
        return query;
    }

    public queryCount(className: string, where: any) {
        if (!className || className == '') return false;
        var query = new Parse.Query(className);
        if (where)
            query = where(query);
        return query.count();
    }

    public orQuery(className: string, returnFindPromise: boolean, customfunction: Function, ...queryFunctionList: any[]) {
        var queryObjList: any = [];
        var queryList = [...queryFunctionList];
        for (var i in queryList) {
            var query = new Parse.Query(className);
            query = queryList[i](query);
            queryObjList.push(query);
        }
        var mainQuery = Parse.Query.or(...queryObjList);
        if (customfunction) {
            mainQuery = customfunction(mainQuery);
        }
        if (returnFindPromise)
            return mainQuery.find();
        else return mainQuery;
    }

    public extendObject(className: string) {
        if (!className || className == '') return false;
        var ParseObj = Parse.Object.extend(className);
        return ParseObj;
    }

    public newObject(className: string) {
        if (!className || className == '') return false;
        var ParseObj = Parse.Object.extend(className);
        var parseObj = new ParseObj();
        return parseObj;
    }

    public newUser(data: any) {
        if (data) return new Parse.User(data);
        return new Parse.User();
    }

    public setData(parseObj: any, data: any, save: boolean) {
        for (var i in data) {
            parseObj.set(i, data[i]);
        }
        if (save == true) {
            return parseObj.save();
        }
        else
            return parseObj;
    }

    public saveAll(objList: any) {
        return Parse.Object.saveAll(objList);
    }

    public parseFile(name: string, file: any, save: boolean) {
        var parseFile = new Parse.File(name, file);
        if (save == true) {
            return parseFile.save();
        }
        return parseFile;
    }

    public parseFileImage(name: string, file: any, save: boolean) {
        var parseFile = new Parse.File(name, file, "image/png");
        if (save == true) {
            return parseFile.save();
        }
        return parseFile;
    }

    public currentUser() {
        if (Parse.User.current()) {
            return Parse.User.current();
        }
        else {
            return null;
        }
    }

    public fetchCurrentUser() {
        if (Parse.User.current()) {
            return Parse.User.current().fetch();
        }
        else {
            return null;
        }
    }


    public cloud(cloudName: string, params) {
        return Parse.Cloud.run(cloudName, params);
    }

    public cloudNoneOauth(cloudName, params) {
        return Parse.Cloud.run(cloudName, params);
    }

    public parse(): any {
        return Parse;
    }

    public logIn(username, password) {
        return Parse.User.logIn(username.toLowerCase(), password);
    }

    public logOut() {
        return Parse.User.logOut();
    }

    public loginWith(authData: any, loginType: any) {
        Parse.User._registerAuthenticationProvider(authData);
        return Parse.User.logInWith(loginType, authData);
    }


    // newParseUser(id){
    //     if(app.android){
    //          var user = new ParseUser();
    //         user.setObjectId(id);
    //         return user;
    //     }else{
    //        var user =  new PFUser();
    //        user.objectId = id;
    //     //     user.id = id;
    //         return user;
    //     }
    // }
}