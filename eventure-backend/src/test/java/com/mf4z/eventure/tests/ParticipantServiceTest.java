package com.mf4z.eventure.tests;

import com.mf4z.eventure.datamodel.Participant;
import com.mf4z.eventure.repository.ParticipantRepository;
import com.mf4z.eventure.services.impl.ParticipantService;
import org.bson.types.ObjectId;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

public class ParticipantServiceTest {

    @Mock
    private ParticipantRepository participantRepository;

    @InjectMocks
    private ParticipantService participantService;

    public ParticipantServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllParticipants() {
        Participant participant = new Participant();
        participant.setName("John Doe");

        when(participantRepository.findAll()).thenReturn(List.of(participant));

        List<Participant> participants = participantService.getAllParticipants();

        assertEquals(1, participants.size());
        assertEquals("John Doe", participants.get(0).getName());
    }

    @Test
    public void testGetParticipantById() {
        ObjectId participantId = new ObjectId(); // Generate a new ObjectId
        Participant participant = new Participant();
        participant.setId(participantId.toHexString());
        participant.setName("John Doe");

        when(participantRepository.findById(participantId)).thenReturn(Optional.of(participant));

        Optional<Participant> foundParticipant = participantService.getParticipantById(participantId.toHexString());

        assertTrue(foundParticipant.isPresent());
        assertEquals("John Doe", foundParticipant.get().getName());
    }
}
