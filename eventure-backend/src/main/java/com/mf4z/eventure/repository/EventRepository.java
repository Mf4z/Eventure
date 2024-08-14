package com.mf4z.eventure.repository;

import com.mf4z.eventure.datamodel.Event;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends MongoRepository<Event, ObjectId> {  // Updated to ObjectId
    List<Event> findByOrganiser(ObjectId organiserId);
}