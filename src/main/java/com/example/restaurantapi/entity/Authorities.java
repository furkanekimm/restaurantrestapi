

package com.example.restaurantapi.entity;

import javax.persistence.Entity;

@Entity(name="AUTHORITIES")
public class Authorities {
    public String username;
    public String authority;

    public Authorities(){

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
}



