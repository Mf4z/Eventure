package com.mf4z.eventure.repository;

import com.mf4z.eventure.datamodel.Participant;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ParticipantRepository extends MongoRepository<Participant, ObjectId> {
    Optional<Participant> findByEmail(String email);  // Example of a custom query method
}

