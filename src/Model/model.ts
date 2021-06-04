export class model
{
    user: string;
    items: { action: string; done: boolean; }[];

    constructor()
    {
        this.user = "Debby";
        this.items = [
            {action:"Buy flower", done:false},
            {action:"Get to the Bank",done:false},
            {action:"Get a pier of shoe", done:true},
            {action:"Visit my Aunt", done:false}
        ]
    }
}

export class TodoItem {
    action: any;
    done: any;
    constructor(action: any,done: any){
        this.action = action;
        this.done = done;
    }
}