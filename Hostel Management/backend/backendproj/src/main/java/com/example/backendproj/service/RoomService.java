package com.example.backendproj.service;

import com.example.backendproj.model.Room;

import java.util.List;

public interface RoomService {
    Room saveRoom(Room room);
    List<Room> getAllRooms();
    Room getRoomById(Long id);
    Room updateRoom(Long id, Room room);
    void deleteRoom(Long id);
}
