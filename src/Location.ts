export type AggregateName = string;
export type SequenceID = string;
export type EventIndex = number;
export type SequenceSlot = number;

export interface SequenceIdentification {
    sequence: SequenceID;
};

export interface AggregateSequenceLocation extends SequenceIdentification {
    aggregateName: AggregateName;
};

/**
 * The ordinal number of a Commit within the timeline of a given
 *  sequence (Aggregate Root).
 */
export interface CommitLocation extends SequenceIdentification {
    slot: SequenceSlot;
};

export interface AggregateCommitLocation extends CommitLocation, AggregateSequenceLocation {};

/**
 * The ordinal number of an Event within the timeline of all events
 *  of a given sequence (AggregateRoot). For any two given events,
 *  if a.index > b.index, then a's commit is later or same as b's
 *  commit.
 */
export interface EventLocation extends SequenceIdentification {
    index: EventIndex;
};

export interface AggregateEventLocation extends EventLocation, AggregateSequenceLocation {};
