package com.example.backendproj.service.impl;

import com.example.backendproj.model.Room;
import com.example.backendproj.repository.RoomRepository;
import com.example.backendproj.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room getRoomById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with id " + id));
    }

    @Override
    public Room updateRoom(Long id, Room room) {
        Room existingRoom = getRoomById(id);
        existingRoom.setRoomName(room.getRoomName());
        existingRoom.setRoomType(room.getRoomType());
        existingRoom.setFloor(room.getFloor());
        existingRoom.setDescription(room.getDescription());
        return roomRepository.save(existingRoom);
    }

    @Override
    public void deleteRoom(Long id) {
        Room room = getRoomById(id);
        roomRepository.delete(room);
    }
}
