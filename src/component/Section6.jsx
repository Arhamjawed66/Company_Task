import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const cards = [
  {
    id: 1,
    title: 'Swing Account',
    description: 'Perfect for traders who prefer holding positions longer.',
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main' }} />, // Swing Account Icon
  },
  {
    id: 2,
    title: 'Scaling Plan',
    description: 'Grow your trading account with our flexible plans.',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'success.main' }} />, // Scaling Plan Icon
  },
  {
    id: 3,
    title: 'Free Trial',
    description: 'Try our services with a free trial before committing.',
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: 'warning.main' }} />, // Free Trial Icon
  },
];

function Sectoin6Card() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Heading at the Top */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 3,
          color: "black",
        }}
      >
        Key Highlights
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card key={card.id} sx={{ height: "100%", textAlign: "center" }}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                {/* Card Icon */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  {card.icon}
                </Box>

                <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                  {card.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Sectoin6Card;

