-- Raw SQL to seed the MANTIS database bypassing Prisma v7 constructor issues

INSERT INTO "User" ("id", "email", "name", "passwordHash", "role", "timezone", "createdAt") VALUES
('11111111-1111-1111-1111-111111111111', 'sarah@example.com', 'Dr. Sarah Chen', 'hashed-pass-123', 'EXPERT', 'America/Los_Angeles', NOW()),
('22222222-2222-2222-2222-222222222222', 'marcus@example.com', 'Marcus Johnson', 'hashed-pass-123', 'EXPERT', 'Europe/London', NOW()),
('33333333-3333-3333-3333-333333333333', 'elena@example.com', 'Elena Rodriguez', 'hashed-pass-123', 'EXPERT', 'America/New_York', NOW());

INSERT INTO "Profile" ("id", "userId", "bio", "skills", "hourlyRate", "isVerified", "rating") VALUES
('11111111-1111-1111-1111-111111111112', '11111111-1111-1111-1111-111111111111', 'Staff ML Engineer with 10 years of experience.', ARRAY['Python', 'PyTorch', 'System Design'], 150.00, true, 4.9),
('22222222-2222-2222-2222-222222222223', '22222222-2222-2222-2222-222222222222', 'Senior Product Designer focusing on UX/UI.', ARRAY['Figma', 'UX Research', 'UI'], 90.00, true, 4.8),
('33333333-3333-3333-3333-333333333334', '33333333-3333-3333-3333-333333333333', 'Founding Engineer at multiple startups.', ARRAY['React', 'Next.js', 'Node'], 120.00, true, 5.0);
