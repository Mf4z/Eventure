package com.mf4z.eventure.services.impl;

import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.services.api.IEventDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService {
    @Autowired
    IEventDAO eventDAO;

    public List<Event> getAllEvents() {
        return eventDAO.findAll();
    }

    public Event getEvent(String id) {
        return eventDAO.findById(id).orElse(null);
    }

    public void createEvent(Event event) {
        eventDAO.save(event);
    }
}
