package com.mf4z.eventure.tests;

import com.mf4z.eventure.conf.ApplicationConfiguration;
import com.mf4z.eventure.datamodel.Event;
import com.mf4z.eventure.services.api.IEventDAO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = ApplicationConfiguration.class)
public class TestEventModel {
    private static final Logger LOGGER = LogManager.getLogger(TestEventModel.class);

    @Autowired
    private IEventDAO eventDAO;

    @Test
    public void testEventCreation() {
        // Given
        Event event = new Event();
        event.setEventName("Sample Event");
        event.setEventDate("2024-08-10");

        // When
        eventDAO.save(event);

        // Then
        Event readEvent = eventDAO.findById(event.getId()).orElse(null);
        Assertions.assertNotNull(readEvent);
        Assertions.assertEquals("Sample Event", readEvent.getEventName());
    }
}
