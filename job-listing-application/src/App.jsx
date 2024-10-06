import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
	// Add a new job
	const addJob = async (newJob) => {
		try {
			const res = await fetch('/api/jobs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newJob),
			});
			return;
		} catch (error) {
			console.error(error);
		}
	};

	// Edit job
	const updateJob = async (job) => {
		try {
			const res = await fetch(`/api/jobs/${job.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(job),
			});
			return;
		} catch (error) {
			console.error(error);
		}
	};

	// Delete job
	const deleteJob = async (id) => {
		try {
			const res = await fetch(`/api/jobs/${id}`, {
				method: 'DELETE',
			});
			return;
		} catch (error) {
			console.error(error);
		}
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/jobs' element={<JobsPage />} />
				<Route
					path='/jobs/:id'
					element={<JobPage deleteJob={deleteJob} />}
					loader={jobLoader}
				/>
				<Route path='/add-job' element={<AddJobPage addNewJob={addJob} />} />
				<Route
					path='/edit-job/:id'
					element={<EditJobPage updateJob={updateJob} />}
					loader={jobLoader}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		)
	);
``
	return <RouterProvider router={router} />;
};

export default App;
