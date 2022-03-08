declare module namespace {

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

    export interface TimeEstimate {
        lowerBound: number;
        upperBound: number;
        __typename: string;
    }

    export interface Content {
        contentId: string;
        id: string;
        kind: string;
        title: string;
        defaultUrlPath: string;
        topicPaths: TopicPath[];
        description: string;
        thumbnailUrl: string;
        slug: string;
        __typename: string;
        expectedDoNCount?: number;
        timeEstimate: TimeEstimate;
    }

    export interface StudentList {
        id: string;
        cacheId: string;
        name: string;
        __typename: string;
    }

    export interface Student {
        id: string;
        kaid: string;
        __typename: string;
    }

    export interface BestScore {
        numCorrect: number;
        numAttempted: number;
        __typename: string;
    }

    export interface TotalCompletionState {
        student: Student;
        state: string;
        completedOn?: Date;
        bestScore: BestScore;
        __typename: string;
    }

    export interface ExerciseConfig {
        itemPickerStrategy: string;
        __typename: string;
    }

    export interface Assignment {
        id: string;
        key: string;
        subjectSlug: string;
        contents: Content[];
        assignedDate: Date;
        dueDate: Date;
        studentList: StudentList;
        totalCompletionStates: TotalCompletionState[];
        exerciseConfig: ExerciseConfig;
        __typename: string;
    }

    export interface PageInfo {
        nextCursor?: any;
        __typename: string;
    }

    export interface AssignmentsPage {
        assignments: Assignment[];
        pageInfo: PageInfo;
        __typename: string;
    }

    export interface User {
        id: string;
        kaid: string;
        assignmentsPage: AssignmentsPage;
        __typename: string;
    }

    export interface Data {
        user: User;
    }

    export interface RootObject {
        data: Data;
    }

}
