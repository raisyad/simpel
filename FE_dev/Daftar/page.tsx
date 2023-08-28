'use client'
import React, { ChangeEvent } from 'react'
import { Box, IconButton, Typography, Card, Grid, TextField, Button, CardActions, CardContent, Alert, Container, FormControl, OutlinedInput, InputAdornment, Select, MenuItem, Stack, Divider } from '@mui/material';
import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const CustomDivider: React.FC = () => {
  return <Divider
    sx={{
      maxWidth: '100%',
      margin: '10px auto',
    }} />;
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 400px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: #4caf50;
  }

  &:focus {
    border-color: #4caf50;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }

  @media screen and (max-width: 600px) {
    // Atur ukuran textarea untuk perangkat dengan lebar layar maksimum 600px
    width: 250px;
  }
`,
);


export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Box maxWidth="md">
          <Box display="flex" alignItems="center" sx={{ paddingTop: 5 }}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                padding: '1px',
                textAlign: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <Link href="/" passHref>
                <Box>
                  <IconButton>
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                </Box>
              </Link>
            </Box>
            <Box ml={1}>
              <Typography sx={{ color: 'grey' }}>Sebelumnya</Typography>
              <Typography fontWeight={'bold'}>Homepage</Typography>
            </Box>
          </Box>
        </Box>
        <Container maxWidth="md" sx={{
          mt: 5,
          mb: 3,
        }}>
          <Typography component={'h1'} variant='h4' fontWeight={'bold'} mb={5} sx={{
            '@media (max-width: 600px)': {
              maxWidth: 280,
            },
          }}>
            Registrasi Peserta Pelatihan
          </Typography>


          <Grid container maxWidth="md" spacing={5} mb={5}>
            {/* Left Grid */}

            {/* Jenis Pelantikan */}
            <Grid item xs={12} md={6}>
              <Typography component={'p'}>
                Jenis Pelantikan
              </Typography>
              <Select name='lang' variant='outlined' size='small' defaultValue="ID"
                sx={{
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderRadius: 2,
                  mt: 1,
                  width: 150,
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  }
                }}>
                <MenuItem value="ID" aria-valuemin={1}>
                  <div>
                    BKA
                  </div>
                </MenuItem>
                <MenuItem value="EN" aria-valuemin={1}>BPSDM</MenuItem>
              </Select>

              {/* NIK */}
              <Typography component={'p'} mt={5}>
                NIK
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1 }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan Email'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>
            </Grid>

            {/* Right Grid */}
            <Grid item xs={12} md={6}>
              <Typography component={'p'}>
                Email
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1 }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan Email'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>
              <Typography component={'p'} mt={5.5}>
                Password
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{
                maxWidth: 400,
                mt: 1,
              }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukan Password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  onChange={(e) => setIsPasswordFilled(e.target.value !== '')}
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>

          {/* Before Garis */}


          {/* Border Bottom */}
          <CustomDivider />


          {/* After Garis */}

          <Grid container maxWidth="md" spacing={5} mt={1} mb={5}>
            {/* Left Grid */}

            {/* Nama Peserta */}
            <Grid item xs={12} md={6}>
              <Typography component={'p'} >
                Nama Peserta (Lengkap / Gelar)
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{
                maxWidth: 400,
                mt: 1,
              }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukan Password'
                  type='text'
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  }
                  onChange={(e) => setIsPasswordFilled(e.target.value !== '')}
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Nama Ibu Kandung */}
              <Typography component={'p'} mt={5}>
                Nama Ibu Kandung
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan Nama Ibu Kandung'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Tempat Tanggal Lahir */}
              <Typography component={'p'} mt={5}>
                Tempat Tanggal Lahir
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Contoh: Bandung, 17 Mei 2023'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* NIP */}
              <Typography component={'p'} mt={5}>
                NIP
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan NIP'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Pangkat / Golongan */}
              <Typography component={'p'} mt={5}>
                Masukkan Pangkat / Golongan
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan NIP'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Jabatan */}
              <Typography component={'p'} mt={5}>
                Masukkan Jabatan
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan NIP'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Unit Kerja */}
              <Typography component={'p'} mt={5}>
                Masukkan Unit Kerja
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan NIP'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Pendidikan Umum */}
              <Typography component={'p'} mt={5}>
                Pendidikan Umum
              </Typography>
              <Grid container maxWidth="md" spacing={5}>
                <Grid item xs={12} md={6} lg={4}>
                  <Stack spacing={2.5}>
                    {/* SD */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='SD'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* SMP */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='SMP'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* SMA */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='SMA'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Strata 1 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Strata 1'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Strata 2 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Strata 2'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Strata 3 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Strata 3'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Stack spacing={2.5}>
                    {/* Tahun SD */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Tahun'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Tahun SMP */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Tahun'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Tahun SMA */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Tahun'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Tahun Strata 1 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Tahun'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Tahun Strata 2 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Tahun'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Tahun Strata 3 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Tahun'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>
                  </Stack>

                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Stack spacing={2.5}>
                    {/* Di SD */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Di'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Di SMP */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Di'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Di SMA */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Di'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Di Strata 1 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Di'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Di Strata 2 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Di'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                    {/* Di Strata 3 */}
                    <FormControl variant="outlined" sx={{ maxWidth: 400, mt: 1 }}>
                      <OutlinedInput
                        size='small'
                        color='success'
                        placeholder='Di'
                        sx={{
                          borderRadius: 2,
                          '& input::placeholder': {
                            textAlign: 'center', // Menyimpan placeholder di tengah
                          },
                          '@media (max-width: 600px)': {
                            maxWidth: 250,
                          },
                        }}
                      />
                    </FormControl>

                  </Stack>
                </Grid>
              </Grid>

            </Grid>

            {/* Right Grid */}
            <Grid item xs={12} md={6}>

              {/* Agama */}
              <Typography component={'p'}>
                Agama
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Contoh: Islam'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Status Perkawinan */}
              <Typography component={'p'} mt={5}>
                Status Perkawinan
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Contoh: Sudah Kawin'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Hobi */}
              <Typography component={'p'} mt={5}>
                Hobi
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Contoh: Sudah Kawin'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Alamat */}
              <Typography component={'p'} mt={5}>
                Alamat
              </Typography>
              <StyledTextarea
                color='success'
                minRows={3}
                placeholder="Masukkan Alamat"
              />

              {/* Nomor Telepon */}
              <Typography component={'p'} mt={5}>
                Nomor Telepon
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Contoh: 0881-XXXX-XXXX'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Nama Instansi */}
              <Typography component={'p'} mt={5}>
                Nama Instansi
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Masukkan Nama Instansi'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Alamat Instansi */}
              <Typography component={'p'} mt={5}>
                Alamat Instansi
              </Typography>
              <StyledTextarea
                color='success'
                minRows={3}
                placeholder="Masukkan Alamat Instansi"
              />

              {/* Nomor Telepon Instansi */}
              <Typography component={'p'} mt={5}>
                Nomor Telepon Instansi
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, }}>
                <OutlinedInput
                  size='small'
                  color='success'
                  placeholder='Contoh: 0881-XXXX-XXXX'
                  sx={{
                    borderRadius: 2,
                    '@media (max-width: 600px)': {
                      maxWidth: 250,
                    },
                  }}
                />
              </FormControl>

              {/* Foto */}
              <Typography component={'p'} mt={5}>
                Foto
              </Typography>
              <FormControl variant="outlined" fullWidth sx={{ maxWidth: 400, mt: 1, borderRadius: 2, border: '1px solid #ddd' }}>
                <label htmlFor="fileInput" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'block',
                      padding: '6px 8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#333',
                      backgroundColor: '#fff',
                      border: '1px solid #ddd',
                      borderRadius: '6px 0 0 6px',
                      cursor: 'pointer',
                    }}
                  >
                    Choose File
                  </span>
                  <span
                    style={{
                      display: 'block',
                      marginLeft: '8px',
                      fontSize: '14px',
                      color: '#333',
                    }}
                  >
                    {selectedFile ? selectedFile.name : 'No file selected'}
                  </span>
                  <input
                    type="file"
                    id="fileInput"
                    style={{
                      width: '0.1px',
                      height: '0.1px',
                      opacity: 0,
                      overflow: 'hidden',
                      position: 'absolute',
                      zIndex: -1,
                    }}
                    onChange={handleFileChange}
                  />
                </label>
              </FormControl>

            </Grid>
          </Grid>

          {/* Batas Garis bawah */}
          <CustomDivider />
          {/* Batas Garis bawah */}

          {/* Pernyataan Setuju */}
          <Grid container alignItems={'center'} sx={{
            mb: 1
          }}>
            <Box>
              <Checkbox color='success' />
              <Typography variant='caption' sx={{
                color: 'grey.700', '@media (max-width: 600px)': {
                  maxWidth: 250,
                },
              }} fontWeight={'bold'} >
                Saya menyatakan data yang diisi benar dan dapat dipertanggungjawabkan.
              </Typography>
            </Box>
          </Grid>
          {/* Button Click */}
          <Container
            maxWidth='lg'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              type='submit'
              variant='contained'
              color='success'
              sx={{
                borderRadius: 2,
                mt: 4,
                width: 250,
                '@media (max-width: 600px)': {
                  maxWidth: 200,
                },
              }}
            >
              Daftar
            </Button>
          </Container>

        </Container>
      </Container>
    </div>
  )
}
