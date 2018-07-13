
export class NewsModel {
    private _id: string;
    private _title: string;
    private _imageUrl: string;
    private _sourceUrl: string;
    private _subContent: string;
    private _typeOrHumanSource: string;
    private _sourcePage: string;
    private _createdAt: Date;
    private _updatedAt: Date;


    /**
     * Getter id
     * @return {string}
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter imageUrl
     * @return {string}
     */
    public get imageUrl(): string {
        return this._imageUrl;
    }

    /**
     * Getter sourceUrl
     * @return {string}
     */
    public get sourceUrl(): string {
        return this._sourceUrl;
    }

    /**
     * Getter subContent
     * @return {string}
     */
    public get subContent(): string {
        return this._subContent;
    }

    /**
     * Getter typeOrHumanSource
     * @return {string}
     */
    public get typeOrHumanSource(): string {
        return this._typeOrHumanSource;
    }

    /**
     * Getter sourcePage
     * @return {string}
     */
    public get sourcePage(): string {
        return this._sourcePage;
    }

    /**
     * Getter createdAt
     * @return {Date}
     */
    public get createdAt(): Date {
        return this._createdAt;
    }

    /**
     * Getter updatedAt
     * @return {Date}
     */
    public get updatedAt(): Date {
        return this._updatedAt;
    }

    /**
     * Setter id
     * @param {string} value
     */
    public set id(value: string) {
        this._id = value;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter imageUrl
     * @param {string} value
     */
    public set imageUrl(value: string) {
        this._imageUrl = value;
    }

    /**
     * Setter sourceUrl
     * @param {string} value
     */
    public set sourceUrl(value: string) {
        this._sourceUrl = value;
    }

    /**
     * Setter subContent
     * @param {string} value
     */
    public set subContent(value: string) {
        this._subContent = value;
    }

    /**
     * Setter typeOrHumanSource
     * @param {string} value
     */
    public set typeOrHumanSource(value: string) {
        this._typeOrHumanSource = value;
    }

    /**
     * Setter sourcePage
     * @param {string} value
     */
    public set sourcePage(value: string) {
        this._sourcePage = value;
    }

    /**
     * Setter createdAt
     * @param {Date} value
     */
    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    /**
     * Setter updatedAt
     * @param {Date} value
     */
    public set updatedAt(value: Date) {
        this._updatedAt = value;
    }


    constructor(data: any) {
        this.setDefaultValue();
        if (data) {
            this.parseDataFromCloudCode(data);
        }
    }

    setDefaultValue() {
        this.id = "";
        this.title = "";
        this.imageUrl = "";
        this.sourceUrl = "";
        this.subContent = "";
        this.typeOrHumanSource = "";
        this.sourcePage = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    parseDataFromCloudCode(data: any) {
        this.id = data.id;
        this.title = data.get("title");
        this.imageUrl = data.get("image");
        this.sourceUrl = data.get("sourceUrl");
        this.subContent = data.get("subContent");
        this.typeOrHumanSource = data.get("typeOrHumanSource");
        this.sourcePage = data.get("sourcePage");
        this.createdAt = data.get("createdAt");
        this.updatedAt = data.get("updatedAt");
    }
}