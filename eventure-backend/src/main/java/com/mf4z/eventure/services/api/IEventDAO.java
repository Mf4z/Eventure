package com.mf4z.eventure.services.api;

import com.mf4z.eventure.datamodel.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEventDAO extends MongoRepository<Event, String> {
    // Additional custom queries can be added here if needed
}
