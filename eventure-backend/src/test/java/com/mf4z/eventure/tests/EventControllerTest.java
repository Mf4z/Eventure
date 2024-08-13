package com.mf4z.eventure.tests;

import com.mf4z.eventure.controller.EventController;
import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.services.impl.EventService;
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
        Event event = new Event();
        event.setId("1");
        event.setEventName("Sample Event");

        when(eventService.getEventById("1")).thenReturn(Optional.of(event));

        ResponseEntity<Event> response = eventController.getEventById("1");

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Sample Event", response.getBody().getEventName());
    }

    @Test
    public void testGetEventsByUserId() {
        String userId = "testUserId";

        Event event1 = new Event();
        event1.setEventName("Sample Event 1");
        event1.setOrganiser(userId);

        Event event2 = new Event();
        event2.setEventName("Sample Event 2");
        event2.setOrganiser(userId);

        when(eventService.getEventsByUserId(userId)).thenReturn(List.of(event1, event2));

        ResponseEntity<List<Event>> response = eventController.getEventsByUserId(userId);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(2, response.getBody().size());
        assertEquals("Sample Event 1", response.getBody().get(0).getEventName());
        assertEquals("Sample Event 2", response.getBody().get(1).getEventName());
    }
}
