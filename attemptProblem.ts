declare module namespace {

  export interface Input {
      problemNumber: number;
      assessmentItemSha: string;
      assessmentItemId: string;
      completed: boolean;
      exerciseId: string;
      //topicId: string; 
      problemType: string;
      countHints: number;
      timeTaken: number;
      attemptNumber: number;
      attemptContent: string;
      attemptState: string;
      taskContentKey: string;
      taskKey: string;
      skipped: boolean;
      clientDt: Date;
      localTimezoneOffsetSeconds: number;
      context?: any;
  }

  export interface Variables {
      input: Input;
  }

  export interface RootObject {
      operationName: string;
      variables: Variables;
      query: string;
  }

}

