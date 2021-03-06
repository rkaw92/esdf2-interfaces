import { QualifiedDomainEvent } from './DomainEvent';
import { CommitLocation } from './Location';

export interface BareCommit {
    location: CommitLocation;
}

export interface Commit extends BareCommit {
    events: QualifiedDomainEvent[];
};
