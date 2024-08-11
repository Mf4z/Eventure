package com.mf4z.eventure.repository;

import com.mf4z.eventure.datamodel.Participant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends MongoRepository<Participant, String> {
    // Custom query methods can be added here if needed
}
