package com.mf4z.eventure.datamodel;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "events")
public class Event {
    @Id
    private ObjectId id;  // Change the id type to ObjectId
    private String eventName;
    private String eventDate;
    private String createdAt;
    private String location;
    private String eventDescription;
    private ObjectId organiser;  // Organiser is also an ObjectId
    private List<Participant> participants;

    // Getters and Setters

    public String getId() {
        return id.toHexString(); // Convert ObjectId to String
    }

    public void setId(String id) {
        this.id = new ObjectId(id); // Convert String to ObjectId
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public ObjectId getOrganiser() {
        return organiser;
    }

    public void setOrganiser(ObjectId organiser) {
        this.organiser = organiser;
    }

    public List<Participant> getParticipants() {
        return participants;
    }

    public void setParticipants(List<Participant> participants) {
        this.participants = participants;
    }
}
