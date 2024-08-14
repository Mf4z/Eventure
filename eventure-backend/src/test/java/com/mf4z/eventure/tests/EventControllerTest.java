package com.mf4z.eventure.tests;

import com.mf4z.eventure.controller.EventController;
import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.services.impl.EventService;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class EventControllerTest {
    @Mock
    private EventService eventService;

    @InjectMocks
    private EventController eventController;

    public EventControllerTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllEvents() {
        Event event = new Event();
        event.setEventName("Sample Event");

        when(eventService.getAllEvents()).thenReturn(List.of(event));

        ResponseEntity<List<Event>> response = eventController.getAllEvents();

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(1, response.getBody().size());
        assertEquals("Sample Event", response.getBody().get(0).getEventName());
    }

    @Test
    public void testGetEventById() {
        ObjectId eventId = new ObjectId();  // Create an ObjectId
        Event event = new Event();
        event.setId(String.valueOf(eventId));  // Set ObjectId
        event.setEventName("Sample Event");

        when(eventService.getEventById(eventId.toHexString())).thenReturn(Optional.of(event)); // Convert ObjectId to String

        ResponseEntity<Event> response = eventController.getEventById(eventId.toHexString());

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Sample Event", response.getBody().getEventName());
    }

    @Test
    public void testGetEventsByUserId() {
        ObjectId userId = new ObjectId();  // Create an ObjectId for the organiser

        Event event1 = new Event();
        event1.setEventName("Sample Event 1");
        event1.setOrganiser(userId);

        Event event2 = new Event();
        event2.setEventName("Sample Event 2");
        event2.setOrganiser(userId);

        when(eventService.getEventsByUserId(userId.toHexString())).thenReturn(List.of(event1, event2)); // Convert ObjectId to String

        ResponseEntity<List<Event>> response = eventController.getEventsByUserId(userId.toHexString());

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(2, response.getBody().size());
        assertEquals("Sample Event 1", response.getBody().get(0).getEventName());
        assertEquals("Sample Event 2", response.getBody().get(1).getEventName());
    }
}
