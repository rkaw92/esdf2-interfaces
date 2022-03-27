import { CommitBuilder } from "./CommitBuilder";
import { DomainEvent, QualifiedDomainEvent } from "./DomainEvent";

export const AGGREGATE_NAME = Symbol('aggregate root type');
export const EVENTS = Symbol('pending events');
export const APPLY = Symbol('get new state without building up event list');

export interface CommitBuilderProvider {
    [AGGREGATE_NAME]: QualifiedDomainEvent['location']['aggregateName'];
    [EVENTS]: CommitBuilder;
};

export interface ApplyProvider<EventType extends DomainEvent> {
    [AGGREGATE_NAME]: QualifiedDomainEvent['location']['aggregateName'];
    [APPLY]: <T>(this: T, event: EventType) => T;
};

export interface AggregateRoot<EmittedEventType extends DomainEvent> extends CommitBuilderProvider, ApplyProvider<EmittedEventType> {};
export type EventOf<T> = T extends AggregateRoot<infer EmittedEventType> ? EmittedEventType : never;
