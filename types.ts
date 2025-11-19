export interface JobCategory {
    title: string;
    description: string;
    icon: string;
}

export interface ProposalRequest {
    jobDescription: string;
    skills: string;
    experience: string;
}

export enum LoadingState {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}