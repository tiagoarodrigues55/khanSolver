declare module namespace {

  export interface BestScore {
      numAttempted: number;
      numCorrect: number;
      completedDate: Date;
      __typename: string;
  }

  export interface Content {
      id: string;
      progressKey: string;
      __typename: string;
  }

  export interface LastCompletedAttempt {
      id: string;
      lastAttemptDate: Date;
      numCorrect: number;
      numAttempted: number;
      __typename: string;
  }

  export interface ContentItemProgress {
      bestScore: BestScore;
      completionStatus: string;
      content: Content;
      __typename: string;
      lastCompletedAttempt: LastCompletedAttempt;
  }

  export interface MasteryMap {
      progressKey: string;
      status: string;
      __typename: string;
  }

  export interface CurrentMastery {
      percentage: number;
      pointsEarned: number;
      pointsAvailable: number;
      __typename: string;
  }

  export interface CurationItemProgress {
      numTotalSkills: number;
      numCompletedSkills: number;
      masteryEnabled: boolean;
      subjectMasteryEnabled: boolean;
      masteryMap: MasteryMap[];
      currentMastery: CurrentMastery;
      __typename: string;
  }

  export interface User {
      contentItemProgresses: ContentItemProgress[];
      id: string;
      curationItemProgress: CurationItemProgress;
      recommendationsForUnit: any[];
      __typename: string;
  }

  export interface Data {
      user: User;
  }

  export interface RootObject {
      data: Data;
  }

}

