import { CommitBuilder } from "./CommitBuilder";
import { DomainEvent } from "./DomainEvent";

export const EVENTS = Symbol('pending events');
export const APPLY = Symbol('get new state without building up event list');

export interface CommitBuilderProvider {
    [EVENTS]: CommitBuilder;
};

export interface ApplyProvider<EventType extends DomainEvent> {
    [APPLY]: <T>(this: T, event: EventType) => T;
};

export interface AggregateRoot<EmittedEventType extends DomainEvent> extends CommitBuilderProvider, ApplyProvider<EmittedEventType> {};
export type EventOf<T> = T extends AggregateRoot<infer EmittedEventType> ? EmittedEventType : never;
