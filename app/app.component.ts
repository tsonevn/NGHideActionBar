import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {ActionBar} from "ui/action-bar"

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit{

   public isItemVisible:boolean = true;

    ngOnInit(){

    }
    constructor(private page:Page){
        
    }
    public onTap() {
        //console.log("hide")
        let actionbar:ActionBar = <ActionBar>this.page.getViewById("acbar");
        console.log(actionbar);
        if(actionbar.visibility == 'visible'){
            actionbar.visibility='collapsed';
        }
        else{
             actionbar.visibility='visible';
        }
        
    }


    public secondTap(){
        //console.log("hide isItemVisible")
        this.isItemVisible = !this.isItemVisible
    }
}
