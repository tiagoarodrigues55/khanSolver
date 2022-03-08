declare module namespace {

  export interface NotificationsAdded {
      avatarParts: any[];
      badges: any[];
      continueUrl?: any;
      readable: any[];
      toast: any[];
      urgent: any[];
      __typename: string;
  }

  export interface ActionResults {
      notificationsAdded: NotificationsAdded;
      __typename: string;
  }

  export interface Card {
      done: boolean;
      cardType: string;
      exerciseName: string;
      problemType?: any;
      __typename: string;
  }

  export interface CompletionCriteria {
      name: string;
      __typename: string;
  }

  export interface PromotionCriteria {
      name: string;
      value: number;
      __typename: string;
  }

  export interface Task {
      id: string;
      key: string;
      pointBounty: number;
      pointsEarned: number;
      taskType: string;
      completionCriteria: CompletionCriteria;
      contentKey: string;
      promotionCriteria: PromotionCriteria;
      reservedItems?: any;
      reservedItemsCompleted?: any;
      taskAttemptHistory: any[];
      __typename: string;
  }

  export interface Path {
      id: string;
      kind: string;
      slug: string;
      __typename: string;
  }

  export interface TopicPath {
      path: Path[];
      __typename: string;
  }

  export interface RelatedContent {
      id: string;
      contentKind: string;
      kind: string;
      thumbnailUrl: string;
      translatedTitle: string;
      topicPaths: TopicPath[];
      duration: number;
      imageUrl: string;
      kaUrl: string;
      nodeSlug: string;
      relativeUrl: string;
      slug: string;
      translatedYoutubeId: string;
      __typename: string;
  }

  export interface RelatedVideo {
      conceptTagsInfo: any[];
      contentKind: string;
      duration: number;
      id: string;
      imageUrl: string;
      kaUrl: string;
      kind: string;
      nodeSlug: string;
      progressKey: string;
      relativeUrl: string;
      slug: string;
      thumbnailUrl: string;
      translatedDescription: string;
      translatedTitle: string;
      translatedYoutubeId: string;
      __typename: string;
  }

  export interface Item {
      id: string;
      live: boolean;
      sha: string;
      __typename: string;
  }

  export interface ProblemType {
      items: Item[];
      name: string;
      relatedVideos: any[];
      __typename: string;
  }

  export interface ExerciseModel {
      id: string;
      assessmentItemCount: number;
      displayName: string;
      isQuiz: boolean;
      isSkillCheck: boolean;
      name: string;
      nodeSlug: string;
      progressKey: string;
      translatedDisplayName: string;
      relatedContent: RelatedContent[];
      relatedVideos: RelatedVideo[];
      problemTypes: ProblemType[];
      translatedProblemTypes: any[];
      __typename: string;
  }

  export interface UserExercis {
      exerciseModel: ExerciseModel;
      exercise: string;
      fpmMasteryLevel: string;
      lastAttemptNumber: number;
      lastCountHints: number;
      lastDone?: Date;
      lastMasteryUpdate?: Date;
      longestStreak: number;
      maximumExerciseProgressDt?: Date;
      streak: number;
      totalCorrect: number;
      totalDone: number;
      __typename: string;
  }

  export interface UserTask {
      cards: Card[];
      includeSkipButton: boolean;
      task: Task;
      userExercises: UserExercis[];
      __typename: string;
  }

  export interface Result {
      error?: any;
      actionResults: ActionResults;
      userTask: UserTask;
      __typename: string;
  }

  export interface GetOrCreateExerciseTask {
      result: Result;
      __typename: string;
  }

  export interface Data {
      getOrCreateExerciseTask: GetOrCreateExerciseTask;
  }

  export interface RootObject {
      data: Data;
  }

}

