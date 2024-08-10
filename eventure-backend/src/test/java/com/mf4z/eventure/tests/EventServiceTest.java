package com.mf4z.eventure.tests;

import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.repository.EventRepository;
import com.mf4z.eventure.services.impl.EventService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

public class EventServiceTest {
    @Mock
    private EventRepository eventRepository;

    @InjectMocks
    private EventService eventService;

    public EventServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllEvents() {
        Event event = new Event();
        event.setEventName("Sample Event");

        when(eventRepository.findAll()).thenReturn(List.of(event));

        List<Event> events = eventService.getAllEvents();

        assertEquals(1, events.size());
        assertEquals("Sample Event", events.get(0).getEventName());
    }

    @Test
    public void testGetEventById() {
        Event event = new Event();
        event.setId("1");
        event.setEventName("Sample Event");

        when(eventRepository.findById("1")).thenReturn(Optional.of(event));

        Optional<Event> foundEvent = eventService.getEventById("1");

        assertTrue(foundEvent.isPresent());
        assertEquals("Sample Event", foundEvent.get().getEventName());
    }
}
