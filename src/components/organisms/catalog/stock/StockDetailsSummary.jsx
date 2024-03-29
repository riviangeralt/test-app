import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Scrip } from "src/components/atoms";
import { AddToPortfolioModal } from "src/components/molecules";

const StockDetailsSummary = (props) => {
  const { data } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { stockId } = useParams();

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleBacktest = () =>
    navigate(`/research/backtesting/${stockId}`, {
      state: {
        ticker: data?.ticker,
      },
    });
  const handleSimulate = () =>
    navigate(`/research/simulation/${stockId}`, {
      state: {
        ticker: data?.ticker,
      },
    });

  return (
    <>
      <Box p={4} border="1px solid rgba(171, 171, 171, 0.24)" borderRadius={4}>
        <Stack gap={4}>
          <Scrip label={`${data?.ticker}${data?.version}`} />
          {/* <Text color={"gray.600"}>
            Tesla Inc. Large Cap. Electric Vehicles
          </Text> */}
        </Stack>
        <ButtonGroup variant="secondary" mt={4} flexWrap={"wrap"}>
          <Button onClick={handleModalOpen}>Add to Portfolio</Button>
          <Button onClick={handleBacktest}>Backtest</Button>
          <Button onClick={handleSimulate}>Simulate</Button>
          <Button>Customize</Button>
        </ButtonGroup>
      </Box>
      <Suspense fallback="">
        {isModalOpen && (
          <AddToPortfolioModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        )}
      </Suspense>
    </>
  );
};

StockDetailsSummary.propTypes = {
  data: PropTypes.object,
};

export default StockDetailsSummary;
