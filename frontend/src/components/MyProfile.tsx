import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import CountrySelector from './CountrySelector';
import EditorToolbar from './EditorToolbar';

// Define types for the form data
type ProfileFormData = {
  email: string;
  name: string;
  surname: string;
  role: string;
};

// Create separate validation schemas
const profileSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().max(255, 'First name must be 255 characters or less').nonempty('First name is required'),
  surname: z.string().max(255, 'Last name must be 255 characters or less').nonempty('Last name is required'),
  role: z.string().max(100, 'Role must be 255 characters or less').nonempty('Role is required'),
});

export default function MyProfile() {
  // Profile form
  const {
    control: profileControl,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors }
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: 'john.doe@example.com',
      name: '',
      surname: '',
      role: '',
    },
  });

  const onProfileSubmit = (data: ProfileFormData) => {
    console.log('Profile data submitted:', data);
    // Handle profile update logic here
  };

  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="small" />}
            sx={{ pl: 0 }}
          >
            <Link
              underline="none"
              color="neutral"
              href="/"
              aria-label="Home"
            >
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="#"
              sx={{ fontSize: 12, fontWeight: 500 }}
            >
              Users
            </Link>
            <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
        </Box>
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
              Settings
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
              Team
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
              Plan
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={3}>
              Billing
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <form onSubmit={handleProfileSubmit(onProfileSubmit)}>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Personal info</Typography>
              <Typography level="body-sm">
                Customize how your profile information will apper to the networks.
              </Typography>
            </Box>
            <Divider />
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
            >
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={200}
                  sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: 100,
                    top: 170,
                    boxShadow: 'sm',
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Name</FormLabel>
                  <FormControl error={!!profileErrors.name || !!profileErrors.surname}
                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                  >
                    <Controller name="name" control={profileControl} render={({ field }) => (
                      <>
                        <Input size="sm" placeholder="First name" {...field} />
                        {profileErrors.name?.message && <FormHelperText>{profileErrors.name?.message}</FormHelperText>}
                      </>
                    )}>
                    </Controller>
                    <Controller name="surname" control={profileControl} render={({ field }) => (
                      <>
                        <Input size="sm" placeholder="Last name" {...field} sx={{ flexGrow: 1 }} />
                        {profileErrors.surname?.message && <FormHelperText>{profileErrors.surname?.message}</FormHelperText>}
                      </>
                    )}>
                    </Controller>
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl sx={{ maxHeight: 'fit-content', }} error={!!profileErrors.role} >
                    <FormLabel>Role</FormLabel>
                    <Controller name="role" control={profileControl} render={({ field }) => (
                      <>
                        <Input size="sm" {...field} />
                        {profileErrors.role?.message && <FormHelperText>{profileErrors.role?.message}</FormHelperText>}
                      </>
                    )}>
                    </Controller>
                  </FormControl>
                  <FormControl sx={{ flexGrow: 1, maxHeight: 'fit-content', }} error={!!profileErrors.email}>
                    <FormLabel>Email</FormLabel>
                    <Controller name="email" control={profileControl} render={({ field }) => (
                      <>
                        <Input
                          size="sm"
                          type="email"
                          startDecorator={<EmailRoundedIcon />}
                          placeholder="email"
                          sx={{ flexGrow: 1 }}
                          {...field}
                        />
                        {profileErrors.email?.message && <FormHelperText>{profileErrors.email?.message}</FormHelperText>}
                      </>
                    )}>
                    </Controller>

                  </FormControl>
                </Stack>
                <div>
                  <CountrySelector />
                </div>
                <div>
                  <FormControl sx={{ display: { sm: 'contents' } }}>
                    <FormLabel>Timezone</FormLabel>
                    <Select
                      size="sm"
                      startDecorator={<AccessTimeFilledRoundedIcon />}
                      defaultValue="1"
                    >
                      <Option value="1">
                        Indochina Time (Bangkok){' '}
                        <Typography textColor="text.tertiary" sx={{ ml: 0.5 }}>
                          — GMT+07:00
                        </Typography>
                      </Option>
                    </Select>
                  </FormControl>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
            >
              <Stack direction="row" spacing={2}>
                <Stack direction="column" spacing={1}>
                  <AspectRatio
                    ratio="1"
                    maxHeight={108}
                    sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                      srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                  <IconButton
                    aria-label="upload new picture"
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    sx={{
                      bgcolor: 'background.body',
                      position: 'absolute',
                      zIndex: 2,
                      borderRadius: '50%',
                      left: 85,
                      top: 180,
                      boxShadow: 'sm',
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    sx={{
                      display: {
                        sm: 'flex-column',
                        md: 'flex-row',
                      },
                      gap: 2,
                    }}
                  >
                    <Input size="sm" placeholder="First name" />
                    <Input size="sm" placeholder="Last name" />
                  </FormControl>
                </Stack>
              </Stack>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input size="sm" defaultValue="UI Developer" />
              </FormControl>
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  size="sm"
                  type="email"
                  startDecorator={<EmailRoundedIcon />}
                  placeholder="email"
                  defaultValue="siriwatk@test.com"
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              <div>
                <CountrySelector />
              </div>
              <div>
                <FormControl sx={{ display: { sm: 'contents' } }}>
                  <FormLabel>Timezone</FormLabel>
                  <Select
                    size="sm"
                    startDecorator={<AccessTimeFilledRoundedIcon />}
                    defaultValue="1"
                  >
                    <Option value="1">
                      Indochina Time (Bangkok){' '}
                      <Typography textColor="text.tertiary" sx={{ ml: 0.5 }}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                    <Option value="2">
                      Indochina Time (Ho Chi Minh City){' '}
                      <Typography textColor="text.tertiary" sx={{ ml: 0.5 }}>
                        — GMT+07:00
                      </Typography>
                    </Option>
                  </Select>
                </FormControl>
              </div>
            </Stack>
            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button type="submit" size="sm" variant="solid">
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
        </Card>
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Bio</Typography>
            <Typography level="body-sm">
              Write a short introduction to be displayed on your profile
            </Typography>
          </Box>
          <Divider />
          <Stack spacing={2} sx={{ my: 1 }}>
            <EditorToolbar />
            <Textarea
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
            />
            <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
              275 characters left
            </FormHelperText>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}