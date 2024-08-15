package com.mf4z.eventure.services.impl;

import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.datamodel.Participant;
import com.mf4z.eventure.repository.EventRepository;
import com.mf4z.eventure.repository.ParticipantRepository;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private static final Logger logger = LoggerFactory.getLogger(EventService.class);

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ParticipantRepository participantRepository;


    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(String id) {
        return eventRepository.findById(new ObjectId(id));
    }

    public List<Event> getEventsByUserId(String userId) {
        return eventRepository.findByOrganiser(new ObjectId(userId));
    }
    public Event createEvent(Event event) {
        // Fetch and populate the full Participant objects based on their IDs
        List<Participant> fullParticipants = new ArrayList<>();
        for (Participant participant : event.getParticipants()) {
            if (participant.getId() != null) {
                Participant fullParticipant = participantRepository.findById(participant.getObjectId()).orElse(null);
                if (fullParticipant != null) {
                    fullParticipants.add(fullParticipant);
                }
            }
        }
        event.setParticipants(fullParticipants);
        return eventRepository.save(event);
    }

    public Event updateEvent(String id, Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(new ObjectId(id));
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
        eventRepository.deleteById(new ObjectId(id));
    }
}
