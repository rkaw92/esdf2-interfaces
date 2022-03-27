import { QualifiedDomainEvent } from './DomainEvent';
import { AggregateCommitLocation } from './Location';

export interface BareCommit {
    location: AggregateCommitLocation;
}

export interface Commit extends BareCommit {
    events: QualifiedDomainEvent[];
};
