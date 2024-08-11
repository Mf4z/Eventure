package com.mf4z.eventure.services.impl;

import com.mf4z.eventure.datamodel.Participant;
import com.mf4z.eventure.repository.ParticipantRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ParticipantService {
    private static final Logger logger = LoggerFactory.getLogger(ParticipantService.class);

    @Autowired
    private ParticipantRepository participantRepository;

    public List<Participant> getAllParticipants() {
        logger.debug("Fetching all participants");
        return participantRepository.findAll();
    }

    public Optional<Participant> getParticipantById(String id) {
        logger.debug("Fetching participant with id: {}", id);
        return participantRepository.findById(id);
    }

    public Participant createParticipant(Participant participant) {
        logger.debug("Creating new participant: {}", participant.getName());
        return participantRepository.save(participant);
    }

    public Participant updateParticipant(String id, Participant participantDetails) {
        logger.debug("Updating participant with id: {}", id);
        Optional<Participant> optionalParticipant = participantRepository.findById(id);
        if (optionalParticipant.isPresent()) {
            Participant participant = optionalParticipant.get();
            participant.setName(participantDetails.getName());
            participant.setEmail(participantDetails.getEmail());
            participant.setContact(participantDetails.getContact());
            return participantRepository.save(participant);
        }
        logger.warn("Participant with id: {} not found", id);
        return null;
    }

    public void deleteParticipant(String id) {
        logger.debug("Deleting participant with id: {}", id);
        participantRepository.deleteById(id);
    }
}
