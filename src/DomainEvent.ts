import { AggregateEventLocation } from "./Location";

export interface DomainEvent {
    type: string;
    payload: object;
};

export interface QualifiedDomainEvent extends DomainEvent {
    id: string;
    location: AggregateEventLocation;
};
