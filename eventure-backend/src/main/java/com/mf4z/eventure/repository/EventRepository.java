package com.mf4z.eventure.repository;

import com.mf4z.eventure.datamodel.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {
    // Custom method to find events by organiser's ID
    List<Event> findByOrganiser(String organiserId);
}