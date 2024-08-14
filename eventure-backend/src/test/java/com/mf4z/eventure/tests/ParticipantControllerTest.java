package com.mf4z.eventure.tests;

import com.mf4z.eventure.controller.ParticipantController;
import com.mf4z.eventure.datamodel.Participant;
import com.mf4z.eventure.services.impl.ParticipantService;
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

public class ParticipantControllerTest {

    @Mock
    private ParticipantService participantService;

    @InjectMocks
    private ParticipantController participantController;

    public ParticipantControllerTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllParticipants() {
        Participant participant = new Participant();
        participant.setName("John Doe");

        when(participantService.getAllParticipants()).thenReturn(List.of(participant));

        ResponseEntity<List<Participant>> response = participantController.getAllParticipants();

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(1, response.getBody().size());
        assertEquals("John Doe", response.getBody().get(0).getName());
    }

    @Test
    public void testGetParticipantById() {
        ObjectId participantId = new ObjectId(); // Generate a new ObjectId
        Participant participant = new Participant();
        participant.setId(participantId.toHexString());
        participant.setName("John Doe");

        when(participantService.getParticipantById(participantId.toHexString())).thenReturn(Optional.of(participant));

        ResponseEntity<Participant> response = participantController.getParticipantById(participantId.toHexString());

        assertEquals(200, response.getStatusCodeValue());
        assertEquals("John Doe", response.getBody().getName());
    }
}
