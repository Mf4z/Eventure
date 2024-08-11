package com.mf4z.eventure.controller;

import com.mf4z.eventure.datamodel.Participant;
import com.mf4z.eventure.services.impl.ParticipantService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/participants")
public class ParticipantController {

    private static final Logger logger = LoggerFactory.getLogger(ParticipantController.class);

    @Autowired
    private ParticipantService participantService;

    @GetMapping
    public ResponseEntity<List<Participant>> getAllParticipants() {
        logger.info("Fetching all participants");
        return ResponseEntity.ok(participantService.getAllParticipants());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Participant> getParticipantById(@PathVariable String id) {
        logger.info("Fetching participant with id: {}", id);
        Optional<Participant> participant = participantService.getParticipantById(id);
        return participant.map(ResponseEntity::ok).orElseGet(() -> {
            logger.warn("Participant with id: {} not found", id);
            return ResponseEntity.notFound().build();
        });
    }

    @PostMapping
    public ResponseEntity<Participant> createParticipant(@RequestBody Participant participant) {
        logger.info("Creating new participant: {}", participant.getName());
        return ResponseEntity.ok(participantService.createParticipant(participant));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Participant> updateParticipant(@PathVariable String id, @RequestBody Participant participantDetails) {
        logger.info("Updating participant with id: {}", id);
        Participant updatedParticipant = participantService.updateParticipant(id, participantDetails);
        return updatedParticipant != null ? ResponseEntity.ok(updatedParticipant) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParticipant(@PathVariable String id) {
        logger.info("Deleting participant with id: {}", id);
        participantService.deleteParticipant(id);
        return ResponseEntity.noContent().build();
    }
}
