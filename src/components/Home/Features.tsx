import Grid from "@mui/material/Grid";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { featuresList } from "./data";

const insertBreaks = (str: string) => str.replace(/\)\./g, ")<wbr>.");

const Features = () => {
  return (
    <Box
      id="features"
      sx={{
        py: 12,
        backgroundColor: "#1f2937",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}>
        <Box textAlign="center" mb={10}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: 800 }}>
            Everything you need for high-speed signal processing.
          </Typography>

          <Typography sx={{ color: "rgb(209 213 219)", mt: 2 }} variant="h6">
            From raw audio to complex sensor data, <code>dspx</code> provides
            the tools.
          </Typography>
        </Box>

        {/* MUI v6 Grid */}
        <Grid
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {featuresList.map((feature) => (
            <Grid
              key={feature.title}
              size={4}
              sx={{
                display: "flex",
              }}
            >
              <Card
                elevation={6}
                sx={{
                  backgroundColor: "#111827",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  p: 2,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    pt: 0.5,
                  }}
                >
                  <feature.icon
                    sx={{
                      fontSize: "32px",
                      color: "var(--ifm-color-primary)",
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "white" }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: "rgb(156 163 175)", mt: 1 }}
                  >
                    {feature.description}
                  </Typography>

                  {feature.code && (
                    <Box mt={1}>
                      <code
                        style={{
                          whiteSpace: "pre-wrap",
                          color: "#e5e7eb",
                          background: "#1f2937",
                          padding: "3px 8px",
                          borderRadius: "8px",
                          fontSize: "0.85rem",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: insertBreaks(feature.code),
                        }}
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
