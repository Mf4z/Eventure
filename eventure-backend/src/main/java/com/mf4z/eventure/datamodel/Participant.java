package com.mf4z.eventure.datamodel;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "participants")
public class Participant {

    @Id
    private ObjectId id;
    private String name;
    private String email;
    private String contact;

    // Getters and Setters

    public String getId() {
        return id != null ? id.toHexString() : null;  // Convert ObjectId to String
    }
    // New method to get the actual ObjectId
    public ObjectId getObjectId() {
        return id;
    }


    public void setId(String id) {
        this.id = new ObjectId(id);  // Convert String to ObjectId
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}
