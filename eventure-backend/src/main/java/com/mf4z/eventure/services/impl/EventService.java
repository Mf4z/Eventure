package com.mf4z.eventure.services.impl;

import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(String id) {
        return eventRepository.findById(id);
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(String id, Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.setEventName(eventDetails.getEventName());
            event.setEventDate(eventDetails.getEventDate());
            event.setLocation(eventDetails.getLocation());
            event.setEventDescription(eventDetails.getEventDescription());
            event.setOrganiser(eventDetails.getOrganiser());
            event.setParticipants(eventDetails.getParticipants());
            return eventRepository.save(event);
        }
        return null;
    }

    public void deleteEvent(String id) {
        eventRepository.deleteById(id);
    }
}
