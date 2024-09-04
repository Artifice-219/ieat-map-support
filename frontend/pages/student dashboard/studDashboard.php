<?php
// Example user data fetched from a database or form submission
$student_data = [
    'student_number' => '202200169',
    'student_name' => 'John Phillip Lor',
    'student_email' => 'johnphilliplor.basc@gmail.com',
    'profile_picture' => 'path_to_image.jpg',
    'class_schedule' => [
        ['class' => 'IT305', 'room' => 'ITNB 103', 'date' => 'Mon, Sep 2', 'time' => '08:00 AM - 09:00 AM'],
        
    ],
    'notifications' => [
        'Reminder: Room ITNB 103 booked at 8:00 AM',
        'Class "IT305" moved to Room ITNB 101',
        // More notifications...
    ],
    'announcements' => [
        'New semester starts on October 1st',
        'Room ITNB 102 closed for maintenance',
        // More announcements...
    ]
];

?>

<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body style="background-color: #4f0007;">

    <!-- Welcome Message & Profile Summary -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="flex items-center space-x-4">
                <?php if($student_data['profile_picture']): ?>
                    <img src="<?= $student_data['profile_picture'] ?>" alt="Profile Picture" class="w-16 h-16 rounded-full">
                <?php endif; ?>
                <div>
                    <h2 class="text-2xl font-semibold">Welcome, <?= htmlspecialchars($student_data['student_name']) ?></h2>
                    <p>Student Number: <?= htmlspecialchars($student_data['student_number']) ?></p>
                    <p>Email: <span class="text-gray-500"><?= str_repeat('*', strlen($student_data['student_email']) - 4) . substr($student_data['student_email'], -4) ?></span></p>
                </div>
                <a href="#" class="ml-auto text-blue-500 hover:underline">Edit Profile</a>
            </div>
        </div>
    </div>

    <!-- Room Finder/Locator Map -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Room Finder</h3>
            <input type="text" class="w-full p-2 mb-4 border rounded" placeholder="Search for rooms or buildings...">
            <div class="h-64 mb-4 bg-gray-300 map">
                <!-- Interactive campus map should be embedded here -->
                <p class="py-24 text-center">Interactive Campus Map</p>
            </div>
            <div>
                <h4 class="text-lg font-semibold">Real-Time Room Availability</h4>
                <p class="text-gray-500">Room ITNB 101: Available now</p>
                <p class="text-gray-500">Room ITNB 103: Booked until 2:00 PM</p>
                <!-- Dynamic data should be fetched here -->
            </div>
        </div>
    </div>

    <!-- Student Schedule -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Your Schedule</h3>
            <table class="w-full table-auto">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Class</th>
                        <th class="px-4 py-2">Room</th>
                        <th class="px-4 py-2">Date</th>
                        <th class="px-4 py-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($student_data['class_schedule'] as $class): ?>
                    <tr>
                        <td class="px-4 py-2 border"><?= htmlspecialchars($class['class']) ?></td>
                        <td class="px-4 py-2 border"><?= htmlspecialchars($class['room']) ?></td>
                        <td class="px-4 py-2 border"><?= htmlspecialchars($class['date']) ?></td>
                        <td class="px-4 py-2 border"><?= htmlspecialchars($class['time']) ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <a href="#" class="inline-block mt-4 text-blue-500 hover:underline">Sync with Calendar</a>
        </div>
    </div>

    <!-- Notifications -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Notifications</h3>
            <ul>
                <?php foreach ($student_data['notifications'] as $notification): ?>
                <li class="mb-2"><?= htmlspecialchars($notification) ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <!-- Help & Support -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Help & Support</h3>
            <a href="#" class="text-blue-500 hover:underline">Help Center</a>
            <p>Contact us at: <a href="mailto:support@campus.com" class="text-blue-500 hover:underline">support@campus.com</a></p>
        </div>
    </div>

    <!-- Settings -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Settings</h3>
            <a href="#" class="text-blue-500 hover:underline">Account Settings</a>
            <a href="#" class="ml-4 text-blue-500 hover:underline">Language & Accessibility</a>
        </div>
    </div>

    <!-- Feedback -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Feedback</h3>
            <form method="post" action="submit_feedback.php">
                <textarea name="feedback" class="w-full p-2 mb-4 border rounded" placeholder="Provide your feedback here..."></textarea>
                <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    </div>

    <!-- Announcements -->
    <div class="container p-4 mx-auto">
        <div class="p-6 bg-white rounded-lg shadow-lg">
            <h3 class="mb-4 text-xl font-semibold">Campus Announcements</h3>
            <ul>
                <?php foreach ($student_data['announcements'] as $announcement): ?>
                <li class="mb-2"><?= htmlspecialchars($announcement) ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

</body>
</html>
