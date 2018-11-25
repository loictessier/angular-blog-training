export class Post {
    private _title: string;
    private _content: string;
    private _loveIts: number;
    private _created_at: Date;

    constructor(title: string, content: string) {
        this._title = title;
        this._content = content;
        this._loveIts = 0;
        this._created_at = new Date();
    }

    public get title(): string {
        return this._title;
    }

    public get content(): string {
        return this._content;
    }

    public get loveIts(): number {
        return this._loveIts;
    }

    public addLove() {
        this._loveIts += 1;
    }

    public substractLove() {
        this._loveIts -= 1;
    }

    public get created_at(): Date {
        return this._created_at;
    }
}
