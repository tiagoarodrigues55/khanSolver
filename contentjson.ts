declare module namespace {

    export interface Breadcrumb {
        href: string;
        title: string;
    }
  
    export interface AncestorTopic {
        title: string;
        depth: number;
        href: string;
        renderType: string;
        slug: string;
    }
  
    export interface TimeEstimate {
        lowerBound: number;
        upperBound: number;
    }
  
    export interface Tutorial {
        id: string;
    }
  
    export interface DistanceBetweenAPointAndALine {
        contentDescriptor: string;
        kind: string;
        timeEstimate: TimeEstimate;
        title: string;
        contentId: string;
        masteryEnabled: boolean;
        domain: string;
        subjectMasteryEnabled: boolean;
        tutorials: Tutorial[];
        quizIndex: number;
        positionKey: string;
        positionSlug: string;
        numItems: number;
        type: string;
        slug: string;
    }
  
    export interface TimeEstimate2 {
        lowerBound: number;
        upperBound: number;
    }
  
    export interface Tutorial2 {
        id: string;
    }
  
    export interface GeometryProblemsCoordinatePla {
        contentDescriptor: string;
        kind: string;
        timeEstimate: TimeEstimate2;
        title: string;
        contentId: string;
        masteryEnabled: boolean;
        domain: string;
        subjectMasteryEnabled: boolean;
        tutorials: Tutorial2[];
        quizIndex: number;
        positionKey: string;
        positionSlug: string;
        numItems: number;
        type: string;
        slug: string;
    }
  
    export interface TimeEstimate3 {
        lowerBound: number;
        upperBound: number;
    }
  
    export interface Tutorial3 {
        id: string;
    }
  
    export interface CcDistancesBetweenPoints {
        contentDescriptor: string;
        kind: string;
        timeEstimate: TimeEstimate3;
        title: string;
        contentId: string;
        masteryEnabled: boolean;
        domain: string;
        subjectMasteryEnabled: boolean;
        tutorials: Tutorial3[];
        quizIndex: number;
        positionKey: string;
        positionSlug: string;
        numItems: number;
        type: string;
        slug: string;
    }
  
    export interface Quizzes {
        distanceBetweenAPointAndALine: DistanceBetweenAPointAndALine;
        geometryProblemsCoordinatePla: GeometryProblemsCoordinatePla;
        ccDistancesBetweenPoints: CcDistancesBetweenPoints;
    }
  
    export interface TimeEstimate4 {
        lowerBound: number;
        upperBound: number;
    }
  
    export interface Tutorial4 {
        id: string;
    }
  
    export interface UnitTest {
        contentDescriptor: string;
        kind: string;
        timeEstimate: TimeEstimate4;
        title: string;
        contentId: string;
        masteryEnabled: boolean;
        domain: string;
        subjectMasteryEnabled: boolean;
        numItems: number;
        tutorials: Tutorial4[];
        type: string;
        slug: string;
    }
  
    export interface Topic {
        description: string;
        title: string;
        masteryEnabled: boolean;
        subjectMasteryEnabled: boolean;
        hasUserAuthoredContent: boolean;
        id: string;
        slug: string;
    }
  
    export interface Previous {
        url: string;
        kind: string;
        title: string;
    }
  
    export interface Next {
        url: string;
        kind: string;
        title: string;
    }
  
    export interface NextTopic {
        previous: Previous;
        next: Next;
    }
  
    export interface DownloadUrls {
        mp4: string;
        png: string;
        m3u8: string;
        mp4Low: string;
        mp4LowIos: string;
    }
  
    export interface RelatedVideo {
        nodeUrl: string;
        kind: string;
        translatedYoutubeLang: string;
        description: string;
        title: string;
        contentId: string;
        imageUrl: string;
        translatedYoutubeId: string;
        youtubeId: string;
        duration: number;
        slug: string;
    }
  
    export interface TimeEstimate5 {
        lowerBound: number;
        upperBound: number;
    }
  
    export interface ContentItem {
        nodeUrl: string;
        kind: string;
        translatedYoutubeLang: string;
        description: string;
        title: string;
        contentId: string;
        downloadUrls: DownloadUrls;
        translatedYoutubeId: string;
        sponsored: boolean;
        youtubeId: string;
        bigBingoLinkConversions: string[];
        duration: number;
        thumbnailUrl: string;
        slug: string;
        progressKey: string;
        isSkillCheck?: boolean;
        masteryEnabled?: boolean;
        subjectMasteryEnabled?: boolean;
        relatedVideos: RelatedVideo[];
        expectedDoNCount?: number;
        timeEstimate: TimeEstimate5;
    }
  
    export interface Tutorial5 {
        slug: string;
        description: string;
        title: string;
        url: string;
        contentItems: ContentItem[];
        standards: any[];
        id: string;
    }
  
    export interface Subject {
        url: string;
        title: string;
    }
  
    export interface Module {
        kind: string;
        videoAttribution?: any;
        quizzes: Quizzes;
        unitTest: UnitTest;
        topic: Topic;
        nextTopic: NextTopic;
        experienceUpsell?: any;
        tutorials: Tutorial5[];
        includeUpNextShelf: boolean;
        subject: Subject;
    }
  
    export interface Tab {
        modules: Module[];
    }
  
    export interface Curation {
        canonicalUrl: string;
        initialTabUrl: string;
        domain: string;
        domainId: string;
        attribution?: any;
        description: string;
        renderedPath: string;
        title: string;
        courseId: string;
        breadcrumbs: Breadcrumb[];
        isUnlisted: boolean;
        ancestorTopics: AncestorTopic[];
        subject: string;
        standards: any[];
        searchSchema: string;
        tabs: Tab[];
        unitId: string;
        requestedPath: string;
        curationKind: string;
        unit: string;
        translatedCustomTitleTag: string;
    }
  
    export interface ComponentProps {
        curation: Curation;
    }
  
    export interface RootObject {
        componentProps: ComponentProps;
    }
  
  }
  
  