def productSum(array):
	sum = 0
	multiplier = 1
	for ele in array:
		if isinstance(ele, list):
			multiplier += 1
			return productSum(ele)
		else:
			sum += (multiplier * ele)
			multiplier = 1
	return sum 