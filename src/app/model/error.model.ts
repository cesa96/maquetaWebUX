export class ErrorModel {
  public type: string = "";
  public title: string = "";
  public errors!: Errors;
}
export class Errors {
  public code: [] = [];
  public supportKey: [] = [];
}
