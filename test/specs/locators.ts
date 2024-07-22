export class locators{
    static getTextBoxIndex(_arg0: number) {
        throw new Error("Method not implemented.");
    }
    getTextBoxIndex(index: any){
    return $(`(//input[@type=\'text\'])[${index}]`)
    }
}