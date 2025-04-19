const UserSkeleton = () => {
	return (
		<div className="w-full max-w-4xl mx-auto space-y-4">
			{[1, 2, 3].map((i) => (
				<div
					key={i}
					className="h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"
				/>
			))}
		</div>
	);
};

export default UserSkeleton;
