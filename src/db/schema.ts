import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  role: text('role').notNull().default('student'),
  emailVerified: integer('email_verified', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const userProfiles = sqliteTable('user_profiles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  age: integer('age'),
  gradeLevel: text('grade_level'),
  learningStyle: text('learning_style'),
  preferredDifficulty: text('preferred_difficulty'),
  timezone: text('timezone'),
  avatarUrl: text('avatar_url'),
  bio: text('bio'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const learningSessions = sqliteTable('learning_sessions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  subject: text('subject').notNull(),
  topic: text('topic').notNull(),
  startTime: text('start_time').notNull(),
  endTime: text('end_time'),
  durationMinutes: integer('duration_minutes'),
  completionStatus: text('completion_status').notNull().default('started'),
  overallEmotion: text('overall_emotion'),
  focusScore: integer('focus_score'),
  createdAt: text('created_at').notNull(),
});

export const emotionData = sqliteTable('emotion_data', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sessionId: integer('session_id').references(() => learningSessions.id),
  timestamp: text('timestamp').notNull(),
  detectedEmotion: text('detected_emotion').notNull(),
  confidenceScore: real('confidence_score'),
  suggestionsGiven: text('suggestions_given'),
  createdAt: text('created_at').notNull(),
});

export const learningProgress = sqliteTable('learning_progress', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  subject: text('subject').notNull(),
  topic: text('topic').notNull(),
  masteryLevel: text('mastery_level').notNull().default('beginner'),
  completionPercentage: integer('completion_percentage').default(0),
  lastAccessed: text('last_accessed'),
  streakDays: integer('streak_days').default(0),
  totalTimeMinutes: integer('total_time_minutes').default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});