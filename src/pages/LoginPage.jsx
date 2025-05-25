import Layout from '../layouts/Layout';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const { authAction, setAuthAction } = useContext(AuthContext);
  return (
    <Layout>
      <h1>LoginPage</h1>
      {/* <DialogLogin open={authAction} setOpen={setAuthAction} title="Welcome Back.">
        <Box className={'flex flex-col gap-y-3 mb-8'}>
          <Box className="flex items-center justify-center">
            <Button type="button" className="hover:bg-gray-200 border rounded-full px-12 py-2">
              <Box className="flex gap-3">
                <GoogleLogoIcon className="w-6 h-6" />
                Sign in With Google
              </Box>
            </Button>
          </Box>
          <Box className="flex items-center justify-center">
            <Button type="button" className="hover:bg-gray-200 border rounded-full px-10 py-2">
              <Box className="flex gap-3">
                <FacebookLogoIcon className="w-6 h-6" />
                Sign in With Facebook
              </Box>
            </Button>
          </Box>
        </Box>
      </DialogLogin> */}
    </Layout>
  );
}

export default LoginPage;
