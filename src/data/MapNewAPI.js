export const apiData = [
  {
    professional: "Junior",
    patient: "João Silva",
    device_id: "HashCode",
    oculus: [
      {
        gamification: {
          level: 0,
          scores: 780,
          errors: 3,
          corrects: 7,
          session_duration: 10.2,
          session_completed: true,
        },
        interactions: [
          {
            hand_used: "left",
            interaction_type: "hands",
            timestamp: 12312312,
            duration: 120.1,
            trajectory_points: [
              { x: 1, y: 2, z: 3 },
              { x: 2, y: 3, z: 4 },
              { x: 3, y: 4, z: 5 },
            ],
            accelerometer: [
              {
                left_hand: { x: 0.2, y: 0.3, z: 0.1 },
                right_hand: { x: 0.1, y: 0.2, z: 0.3 },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    professional: "Alice",
    patient: "Maria Souza",
    device_id: "Hash123",
    oculus: [
      {
        gamification: {
          level: 2,
          scores: 940,
          errors: 2,
          corrects: 8,
          session_duration: 15.5,
          session_completed: true,
        },
        interactions: [
          {
            hand_used: "right",
            interaction_type: "hands",
            timestamp: 987654,
            duration: 150.8,
            trajectory_points: [
              { x: 5, y: 3, z: 1 },
              { x: 7, y: 4, z: 2 },
              { x: 9, y: 5, z: 3 },
            ],
            accelerometer: [
              {
                left_hand: { x: 0.1, y: 0.2, z: 0.3 },
                right_hand: { x: 0.3, y: 0.1, z: 0.2 },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    professional: "Lucas",
    patient: "Pedro Albuquerque",
    device_id: "ABC123",
    oculus: [
      {
        gamification: {
          level: 5,
          scores: 1200,
          errors: 1,
          corrects: 9,
          session_duration: 12.8,
          session_completed: false,
        },
        interactions: [
          {
            hand_used: "both",
            interaction_type: "voice",
            timestamp: 1357911,
            duration: 80.2,
            trajectory_points: [
              { x: 2, y: 4, z: 6 },
              { x: 4, y: 6, z: 8 },
              { x: 6, y: 8, z: 10 },
            ],
            accelerometer: [
              {
                left_hand: { x: 0.1, y: 0.1, z: 0.1 },
                right_hand: { x: 0.2, y: 0.2, z: 0.2 },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    professional: "Mariana",
    patient: "Ana Santos",
    device_id: "DEF456",
    oculus: [
      {
        gamification: {
          level: 3,
          scores: 890,
          errors: 4,
          corrects: 6,
          session_duration: 11.5,
          session_completed: true,
        },
        interactions: [
          {
            hand_used: "right",
            interaction_type: "hands",
            timestamp: 2468135,
            duration: 95.7,
            trajectory_points: [
              { x: 3, y: 5, z: 7 },
              { x: 5, y: 7, z: 9 },
              { x: 7, y: 9, z: 11 },
            ],
            accelerometer: [
              {
                left_hand: { x: 0.3, y: 0.2, z: 0.1 },
                right_hand: { x: 0.2, y: 0.1, z: 0.3 },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    professional: "Sophia",
    patient: "Laura Ferreira",
    device_id: "GHI789",
    oculus: [
      {
        gamification: {
          level: 1,
          scores: 620,
          errors: 5,
          corrects: 5,
          session_duration: 9.6,
          session_completed: true,
        },
        interactions: [
          {
            hand_used: "left",
            interaction_type: "voice",
            timestamp: 9876543,
            duration: 75.4,
            trajectory_points: [
              { x: 4, y: 6, z: 8 },
              { x: 6, y: 8, z: 10 },
              { x: 8, y: 10, z: 12 },
            ],
            accelerometer: [
              {
                left_hand: { x: 0.1, y: 0.1, z: 0.1 },
                right_hand: { x: 0.2, y: 0.2, z: 0.2 },
              },
            ],
          },
        ],
      },
    ],
  },
];
